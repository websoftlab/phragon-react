import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDatabaseMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDatabaseMinusIcon = React.forwardRef<SVGSVGElement, TablerDatabaseMinusIconProps>(
	function TablerDatabaseMinusIcon(props, ref) {
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
				<path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
				<path d="M4 6v6c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-6" />
				<path d="M4 12v6c0 1.657 3.582 3 8 3c.164 0 .328 -.002 .49 -.006" />
				<path d="M20 15v-3" />
				<path d="M16 19h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDatabaseMinusIcon.displayName = "TablerDatabaseMinusIcon";
}
