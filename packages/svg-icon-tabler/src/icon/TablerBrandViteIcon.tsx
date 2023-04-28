import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandViteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandViteIcon = React.forwardRef<SVGSVGElement, TablerBrandViteIconProps>(
	function TablerBrandViteIcon(props, ref) {
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
				<path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" />
				<path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandViteIcon.displayName = "TablerBrandViteIcon";
}
