import Header from "./Header";
import { Suspense, lazy } from "react";
import SuspenseContent from "./SuspenseContent";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

// const Page404 = lazy(() => import('../pages/protected/404'))

function PageContent() {
  const mainContentRef = useRef<any>(null);
  const { pageTitle } = useSelector((state: any) => state.header);

  // Scroll back to top on new page load
  useEffect(() => {
    mainContentRef?.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pageTitle]);

  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <main className="flex-1 overflow-y-auto pt-8 px-6  bg-base-300" ref={mainContentRef}>
        <Suspense fallback={<SuspenseContent />}>
          <Outlet />
        </Suspense>
        <div className="h-16"></div>
      </main>
    </div>
  );
}

export default PageContent;
