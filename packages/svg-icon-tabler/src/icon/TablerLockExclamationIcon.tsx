import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLockExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLockExclamationIcon = React.forwardRef<SVGSVGElement, TablerLockExclamationIconProps>(
	function TablerLockExclamationIcon(props, ref) {
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
				<path d="M15 21h-8a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.734 1.002" />
				<path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M8 11v-4a4 4 0 1 1 8 0v4" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLockExclamationIcon.displayName = "TablerLockExclamationIcon";
}
