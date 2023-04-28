import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSolarPanelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSolarPanelIcon = React.forwardRef<SVGSVGElement, TablerSolarPanelIconProps>(
	function TablerSolarPanelIcon(props, ref) {
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
				<path d="M4.28 14h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243z" />
				<path d="M4 10h16" />
				<path d="M10 6l-1 8" />
				<path d="M14 6l1 8" />
				<path d="M12 14v4" />
				<path d="M7 18h10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSolarPanelIcon.displayName = "TablerSolarPanelIcon";
}
