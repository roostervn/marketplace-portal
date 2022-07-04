export default function BasicLayout({ children, ...props }) {
  return (
    <>
      {/* preloade */}
      <div className="preload preload-container">
        <div className="preload-logo" />
      </div>
      {/* /preload */}
      {children}
      <a id="scroll-top" />
    </>
  );
}
