import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCtemplarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCtemplarIcon = React.forwardRef<SVGSVGElement, TablerBrandCtemplarIconProps>(
	function TablerBrandCtemplarIcon(props, ref) {
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
				<path d="M6.04 14.831l4.46 -4.331" />
				<path d="M12.555 20.82c4.55 -3.456 7.582 -8.639 8.426 -14.405a1.668 1.668 0 0 0 -.934 -1.767a19.647 19.647 0 0 0 -8.047 -1.648a19.647 19.647 0 0 0 -8.047 1.647a1.668 1.668 0 0 0 -.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.948 .948 0 0 0 1.11 0z" />
				<path d="M20 5c-2 0 -4.37 3.304 -8 6.644c-3.63 -3.34 -6 -6.644 -8 -6.644" />
				<path d="M17.738 15l-4.238 -4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCtemplarIcon.displayName = "TablerBrandCtemplarIcon";
}