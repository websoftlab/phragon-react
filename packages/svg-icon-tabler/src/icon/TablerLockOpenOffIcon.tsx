import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLockOpenOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLockOpenOffIcon = React.forwardRef<SVGSVGElement, TablerLockOpenOffIconProps>(
	function TablerLockOpenOffIcon(props, ref) {
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
				<path d="M15 11h2a2 2 0 0 1 2 2v2m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4" />
				<path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M8 11v-3m.347 -3.631a4 4 0 0 1 7.653 1.631" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLockOpenOffIcon.displayName = "TablerLockOpenOffIcon";
}
