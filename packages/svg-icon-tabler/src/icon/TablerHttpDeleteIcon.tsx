import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHttpDeleteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHttpDeleteIcon = React.forwardRef<SVGSVGElement, TablerHttpDeleteIconProps>(
	function TablerHttpDeleteIcon(props, ref) {
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
				<path d="M3 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
				<path d="M14 8h-4v8h4" />
				<path d="M10 12h2.5" />
				<path d="M17 8v8h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHttpDeleteIcon.displayName = "TablerHttpDeleteIcon";
}
