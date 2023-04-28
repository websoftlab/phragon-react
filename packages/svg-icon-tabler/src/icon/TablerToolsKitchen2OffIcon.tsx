import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToolsKitchen2OffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToolsKitchen2OffIcon = React.forwardRef<SVGSVGElement, TablerToolsKitchen2OffIconProps>(
	function TablerToolsKitchen2OffIcon(props, ref) {
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
				<path d="M14.386 10.409c.53 -2.28 1.766 -4.692 4.614 -7.409v12m-4 0h-1c0 -.313 0 -.627 0 -.941" />
				<path d="M19 19v2h-1v-3" />
				<path d="M8 8v13" />
				<path d="M5 5v2a3 3 0 0 0 4.546 2.572m1.454 -2.572v-3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerToolsKitchen2OffIcon.displayName = "TablerToolsKitchen2OffIcon";
}
