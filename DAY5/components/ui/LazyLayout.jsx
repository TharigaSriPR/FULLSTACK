import { Suspense } from "react";
import PropTypes from "prop-types";

const LazyLayout = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback={<img src="loading.gif" alt="Loading..." />}>
      <Component {...rest} />
    </Suspense>
  );
};

LazyLayout.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default LazyLayout;
