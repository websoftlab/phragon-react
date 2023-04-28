import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLockSquareRoundedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLockSquareRoundedIcon = React.forwardRef<SVGSVGElement, TablerLockSquareRoundedIconProps>(
	function TablerLockSquareRoundedIcon(props, ref) {
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
				<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
				<path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
				<path d="M10 11v-2a2 2 0 1 1 4 0v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLockSquareRoundedIcon.displayName = "TablerLockSquareRoundedIcon";
}
