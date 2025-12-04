// Base URL is handled by Vite proxy
const API_URL = '/api';

export const fetchProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
};

export const login = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
    }
    return response.json();
};

export const register = async (userData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
    }
    return response.json();
};

export const createOrder = async (orderData, token) => {
    const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Order creation failed');
    }
    return response.json();
};

export const fetchContent = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulated encrypted data (Base64 encoded)
            const encryptedData = "eyJoZWFkZXIiOiB7ImxvZ28iOiAiRmlvbmFHcmVlbnMiLCAibGlua3MiOiBbeyJsYWJlbCI6ICJIb21lIiwgImhyZWYiOiAiI2hvbWUifSwgeyJsYWJlbCI6ICJGZWF0dXJlcyIsICJocmVmIjogIiNmZWFhdHVyZXMiLCAie2xhYmVsIjogIkFib3V0IiwgImhyZWYiOiAiI2Fib3V0In0sIHsibGFiZWwiOiAiQ29udGFjdCIsICJocmVmIjogIiNjb250YWN0In1dLCAiY3RhIjogIkdldCBTdGFydGVkIn0sICJoZXJvIjogeyJoZWFkbGluZSI6ICJGcmVzaCwgT3JnYW5pYywgJiBQdXJlIGZyb20gRmlvbmFHcmVlbnMiLCAic3ViaGVhZGxpbmUiOiAiRGlzY292ZXIgdGhlIGZpbmVzdCBzZWxlY3Rpb24gb2YgMTAwJSBvcmdhbmljIHByb2R1Y3RzLiBHcm93biB3aXRoIGNhcmUsIGhhcnZlc3RlZCBmb3IgeW91ciBoZWFsdGgsIGFuZCBkZWxpdmVyZWQgZnJlc2ggdG8geW91ciBkb29yLiIsICJwcmltYXJ5Q3RhIjogIlNob3AgTm93IiwgInNlY29uZGFyeUN0YSI6ICJPdXIgU3RvcnkifSwgImZlYXR1cmVzIjogeyJ0aXRsZSI6ICJXaHkgQ2hvb3NlIEZpb25hR3JlZW5zPyIsICJzdWJ0aXRsZSI6ICJFeHBlcmllbmNlIHRoZSBkaWZmZXJlbmNlIG9mIHRydWUgcXVhbGl0eS4iLCAiaXRlbXMiOiBbeyJ0aXRsZSI6ICIxMDAlIE9yZ2FuaWMiLCAiZGVzY3JpcHRpb24iOiAiQ2VydGlmaWVkIG9yZ2FuaWMgcHJvZHVjZSBmcmVlIGZyb20gaGFybWZ1bCBwZXN0aWNpZGVzIGFuZCBzeW50aGV0aWMgZmVydGlsaXplcnMuIFB1cmUgbmF0dXJlIGluIGV2ZXJ5IGJpdGUuIiwgImljb24iOiAiXHVkODNjXHVkZjNmIn0sIHsidGl0bGUiOiAiSGVhbHRoIEJlbmVmaXRzIiwgImRlc2NyaXB0aW9uIjogIlJpY2ggaW4gZXNzZW50aWFsIG51dHJpZW50cyBhbmQgYW50aW94aWRhbnRzLiBCb29zdCB5b3VyIGltbXVuaXR5IGFuZCBvdmVyYWxsIHdlbGwtYmVpbmcgd2l0aCBmcmVzaCBncmVlbnMuIiwgImljb24iOiAiXHUyNzY0XHVmZTBmIn0sIHsidGl0bGUiOiAiRmFybSB0byBUYWJsZSIsICJkZXNjcmlwdGlvbiI6ICJTb3VyY2VkIGRpcmVjdGx5IGZyb20gbG9jYWwgc3VzdGFpbmFibGUgZmFybXMgdG8gZW5zdXJlIG1heGltdW0gZnJlc2huZXNzIGFuZCBzdXBwb3J0IGZvciBsb2NhbCBjb21tdW5pdGllcy4iLCAiaWNvbiI6ICJcdWQ4M2RcdWRlOWMifV19LCAiZm9vdGVyIjogeyJsb2dvIjogIkZpb25hR3JlZW5zIiwgInRhZ2xpbmUiOiAiQnVpbGRpbmcgYSBiZXR0ZXIgd2ViIGZvciBhIGJldHRlciB3b3JsZC4iLCAiY29weXJpZ2h0IjogIlx1MDBhOSAyMDI1IEZpb25hR3JlZW5zIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4iLCAibGlua3MiOiB7InByb2R1Y3QiOiBbIkZlYXR1cmVzIiwgIlByaWNpbmciLCAiU2hvd2Nhc2UiXSwgImNvbXBhbnkiOiBbIkFib3V0IiwgIkNhcmVlcnMiLCAiQ29udGFjdCJdLCAiY29ubmVjdCI6IFsiVHdpdHRlciIsICJMaW5rZWRJbiIsICJHaXRIdWIiXX19LCAicHJvZHVjdHMiOiB7InRpdGxlIjogIk91ciBPcmdhbmljIFByb2R1Y3RzIiwgInN1YnRpdGxlIjogIlByZW1pdW0gcXVhbGl0eSBvcmdhbmljIHBvd2RlcnMgZm9yIHlvdXIgaGVhbHRoIGFuZCB3ZWxsbmVzcyIsICJpdGVtcyI6IFt7Im5hbWUiOiAiQXNod2FnYW5kaGEgUG93ZGVyIiwgImNhdGVnb3J5IjogIkhlcmJhbCBTdXBwbGVtZW50IiwgImRlc2NyaXB0aW9uIjogIlB1cmUgb3JnYW5pYyBBc2h3YWdhbmRoYSBwb3dkZXIsIGtub3duIGZvciByZWR1Y2luZyBzdHJlc3MgYW5kIGJvb3N0aW5nIGVuZXJneSBuYXR1cmFsbHkuIiwgInByaWNlIjogIlx1MjBiOTI5OSIsICJpbWFnZSI6ICIvd2Vic2l0ZS9hc2h3YWdhbmRoYS5wbmcifSwgeyJuYW1lIjogIk1vcmluZ2EgUG93ZGVyIiwgImNhdGVnb3J5IjogIlN1cGVyZm9vZCIsICJkZXNjcmlwdGlvbiI6ICJOdXRyaWVudC1yaWNoIE1vcmluZ2EgcG93ZGVyIHBhY2tlZCB3aXRoIHZpdGFtaW5zLCBtaW5lcmFscywgYW5kIGFudGlveGlkYW50cy4iLCAicHJpY2UiOiAiXHUyMGI5MjQ5IiwgImltYWdlIjogIi93ZWJzaXRlL21vcmluZ2EucG5nIn0sIHsibmFtZSI6ICJCZWV0cm9vdCBQb3dkZXIiLCAiY2F0ZWdvcnkiOiAiVmVnZXRhYmxlIFBvd2RlciIsICJkZXNjcmlwdGlvbiI6ICIxMDAlIHB1cmUgYmVldHJvb3QgcG93ZGVyLCBleGNlbGxlbnQgZm9yIGJvb3N0aW5nIHN0YW1pbmEgYW5kIGltcHJvdmluZyBibG9vZCBjaXJjdWxhdGlvbi4iLCAicHJpY2UiOiAiXHUyMGI5MTk5IiwgImltYWdlIjogIi93ZWJzaXRlL2JlZXRyb290LnBuZyJ9LCB7Im5hbWUiOiAiSGFsZGkgKFR1cm1lcmljKSBQb3dkZXIiLCAiY2F0ZWdvcnkiOiAiU3BpY2UgJiBXZWxsbmVzcyIsICJkZXNjcmlwdGlvbiI6ICJPcmdhbmljIHR1cm1lcmljIHBvd2RlciB3aXRoIGhpZ2ggY3VyY3VtaW4gY29udGVudCwgcGVyZmVjdCBmb3IgaW1tdW5pdHkgYW5kIGFudGktaW5mbGFtbWF0b3J5IGJlbmVmaXRzLiIsICJwcmljZSI6ICJcdTIwYjkxNDkiLCAiaW1hZ2UiOiAiL3dlYnNpdGUvdHVybWVyaWMucG5nIn1dfX0=";
            resolve(encryptedData);
        }, 500); // Simulate network delay
    });
};
