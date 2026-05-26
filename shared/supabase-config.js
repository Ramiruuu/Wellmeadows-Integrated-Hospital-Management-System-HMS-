// ============================================
// SHARED SUPABASE CONFIGURATION - WORKING VERSION
// This file is used by BOTH admin and user systems
// ============================================

const SUPABASE_URL = 'https://cqetejeaeasqkafdgjri.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_75JVFc0QWySSyAPQVO-C1g_Udqt9tgQ';

// Initialize Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('✅ Supabase client initialized');

// Helper function to check if user is logged in (for admin pages)
async function checkAdminAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
    }
    return session;
}

// Helper function to logout
async function adminLogout() {
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html';
}

// Make functions available globally
window.supabaseClient = supabaseClient;
window.checkAdminAuth = checkAdminAuth;
window.adminLogout = adminLogout;