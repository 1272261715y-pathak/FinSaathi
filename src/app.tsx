import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/lib/auth";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { AcademyProgressProvider } from "@/lib/academy";
import Shell from "@/components/Shell";
import Home from "@/pages/Home";
import AcademyPage from "@/pages/Academy";
import VideoPage from "@/pages/VideoPage";
import PathPage from "@/pages/PathPage";
import DashboardPage from "@/pages/Dashboard";
import AdminPage from "@/pages/Admin";
import AuthPage from "@/pages/Auth";
import VerifyCertificatePage from "@/components/academy/Certificate";
import "@/motion.css";

// One <Route> per page; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <AuthProvider>
        <AcademyProgressProvider>
          <Shell>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/academy" element={<AcademyPage />} />
              <Route path="/academy/video/:id" element={<VideoPage />} />
              <Route path="/academy/path/:id" element={<PathPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/certificate/:id" element={<VerifyCertificatePage />} />
              <Route path="/sign-in" element={<AuthPage mode="sign-in" />} />
              <Route path="/sign-up" element={<AuthPage mode="sign-up" />} />
              <Route path="/login" element={<Navigate to="/sign-in" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Shell>
          <Toaster position="bottom-right" richColors />
        </AcademyProgressProvider>
      </AuthProvider>
    </LanguageProvider>
    </ThemeProvider>
  );
}
