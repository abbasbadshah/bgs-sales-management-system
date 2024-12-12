import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header, Footer, Sidebar } from "../common";

export const Layout = ({
  children,
  layoutNeeded = true,
  pageTitle = "Default Page Title",
  pageHeading = "BGS Sales",
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (!layoutNeeded) {
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        {children}
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="flex flex-col h-screen">
        <Header onSidebarToggle={toggleSidebar} />
        <div className="flex flex-1 relative overflow-hidden">
          <div className="hidden lg:block w-64">
            <Sidebar isMobile={false} isOpen={true} onClose={closeSidebar} />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-10">
                <section className="bg-primary shadow-sm h-20 flex justify-center items-center">
                  <h1 className="text-4xl font-bold text-center text-text-white">
                    {pageHeading}
                  </h1>
                </section>
                {children}
              </div>
            </main>
            <Footer />
          </div>
          {isSidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div
                className={`
                  w-64 bg-white shadow-lg 
                  transform transition-transform duration-300 ease-in-out
                  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                `}
              >
                <Sidebar
                  isMobile={true}
                  isOpen={true}
                  onClose={closeSidebar}
                  className="z-[999999]"
                />
              </div>
              <div
                className="
                  flex-1 bg-black bg-opacity-50 
                  transition-opacity duration-300 ease-in-out
                  opacity-100 
                  absolute inset-0 
                  z-[-1]
                "
                onClick={closeSidebar}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
