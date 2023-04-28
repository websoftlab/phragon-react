import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEPassportIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEPassportIcon = React.forwardRef<SVGSVGElement, TablerEPassportIconProps>(
	function TablerEPassportIcon(props, ref) {
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
				<path d="M2 5m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
				<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M9 12h-7" />
				<path d="M15 12h7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEPassportIcon.displayName = "TablerEPassportIcon";
}
