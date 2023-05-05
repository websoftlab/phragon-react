import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerServerCrashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerServerCrashIcon = React.forwardRef<SVGSVGElement, TablerServerCrashIconProps>(
	function TablerServerCrashIcon(props, ref) {
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
				<path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
				<path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
				<path d="M6 6h.01" />
				<path d="M6 18h.01" />
				<path d="m13 6-4 6h6l-4 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerServerCrashIcon.displayName = "TablerServerCrashIcon";
}
