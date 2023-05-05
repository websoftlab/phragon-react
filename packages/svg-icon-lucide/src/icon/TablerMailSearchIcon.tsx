import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailSearchIcon = React.forwardRef<SVGSVGElement, TablerMailSearchIconProps>(
	function TablerMailSearchIcon(props, ref) {
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
				<path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" />
				<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
				<path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" />
				<path d="M21 18 A3 3 0 0 1 18 21 A3 3 0 0 1 15 18 A3 3 0 0 1 21 18" />
				<path d="m22 22-1.5-1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMailSearchIcon.displayName = "TablerMailSearchIcon";
}
