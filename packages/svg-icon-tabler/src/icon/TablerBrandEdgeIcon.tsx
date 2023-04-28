import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandEdgeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandEdgeIcon = React.forwardRef<SVGSVGElement, TablerBrandEdgeIconProps>(
	function TablerBrandEdgeIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M20.978 11.372a9 9 0 1 0 -1.593 5.773" />
				<path d="M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79" />
				<path d="M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688" />
				<path d="M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandEdgeIcon.displayName = "TablerBrandEdgeIcon";
}
