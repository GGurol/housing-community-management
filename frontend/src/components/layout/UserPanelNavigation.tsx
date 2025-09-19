import { NavigateButtonProps } from "@/components/ui/NavigateButton.tsx";
import paths from "@/router/paths.ts";
import PanelNavigation from "@/components/layout/PanelNavigation.tsx";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 1. ADDED: The missing import for the 't' function

const UserPanelNavigation = () => {
  const { t } = useTranslation(); // This line now works correctly
  const buttons: NavigateButtonProps[] = [
    { name: t('meter_readings'), path: paths.user.root },
    //{ name: "PRZEWIDYWANE CENY / Nadchodzące opłaty/ upcoming charges", path: paths.user.upcomingCharges },
  ];
  return (
    <>
      <PanelNavigation buttons={buttons} />
      <Outlet />
    </>
  );
};

export default UserPanelNavigation;