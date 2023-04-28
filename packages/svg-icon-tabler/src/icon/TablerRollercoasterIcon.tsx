import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRollercoasterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRollercoasterIcon = React.forwardRef<SVGSVGElement, TablerRollercoasterIconProps>(
	function TablerRollercoasterIcon(props, ref) {
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
				<path d="M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.775 8.775 0 0 1 8.325 -6h3.675" />
				<path d="M20 9v12" />
				<path d="M8 21v-3" />
				<path d="M12 21v-10" />
				<path d="M16 9.5v11.5" />
				<path d="M15 3h5v3h-5z" />
				<path d="M6 8l4 -3l2 2.5l-4 3l-1.8 -.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRollercoasterIcon.displayName = "TablerRollercoasterIcon";
}
