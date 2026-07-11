export function verifyCredentials(username, password) {
    const rootUser = "ADMIN_ICT";
    const secretKey = "CYBER2026";

    if (username.trim() === rootUser && password === secretKey) {
        return { success: true, message: "CORE_ACCESS_GRANTED // DECRYPTING..." };
    }
    return { success: false, message: "INVALID_CREDENTIALS" };
}

export function invalidateSession() {
    console.log("Session cleared from main matrix core memory nodes.");
    return true;
}