import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFountainOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFountainOffIcon = React.forwardRef<SVGSVGElement, TablerFountainOffIconProps>(
	function TablerFountainOffIcon(props, ref) {
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
				<path d="M9 16v-5a2 2 0 1 0 -4 0" />
				<path d="M15 16v-1m0 -4a2 2 0 1 1 4 0" />
				<path d="M12 16v-4m0 -4v-2a3 3 0 0 1 6 0" />
				<path d="M7.451 3.43a3 3 0 0 1 4.549 2.57" />
				<path d="M20 16h1v1m-.871 3.114a2.99 2.99 0 0 1 -2.129 .886h-12a3 3 0 0 1 -3 -3v-2h13" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFountainOffIcon.displayName = "TablerFountainOffIcon";
}
