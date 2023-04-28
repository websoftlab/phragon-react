import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAnchorOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAnchorOffIcon = React.forwardRef<SVGSVGElement, TablerAnchorOffIconProps>(
	function TablerAnchorOffIcon(props, ref) {
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
				<path d="M12 12v9" />
				<path d="M4 13a8 8 0 0 0 14.138 5.13m1.44 -2.56a7.99 7.99 0 0 0 .422 -2.57" />
				<path d="M21 13h-2" />
				<path d="M5 13h-2" />
				<path d="M12.866 8.873a3 3 0 1 0 -3.737 -3.747" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAnchorOffIcon.displayName = "TablerAnchorOffIcon";
}
