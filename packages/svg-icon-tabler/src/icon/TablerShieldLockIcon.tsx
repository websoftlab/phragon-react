import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShieldLockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShieldLockIcon = React.forwardRef<SVGSVGElement, TablerShieldLockIconProps>(
	function TablerShieldLockIcon(props, ref) {
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
				<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
				<path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 12l0 2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShieldLockIcon.displayName = "TablerShieldLockIcon";
}
