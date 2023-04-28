import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerServerBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerServerBoltIcon = React.forwardRef<SVGSVGElement, TablerServerBoltIconProps>(
	function TablerServerBoltIcon(props, ref) {
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
				<path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
				<path d="M15 20h-9a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h12" />
				<path d="M7 8v.01" />
				<path d="M7 16v.01" />
				<path d="M20 15l-2 3h3l-2 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerServerBoltIcon.displayName = "TablerServerBoltIcon";
}
