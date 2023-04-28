import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTableAliasIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTableAliasIcon = React.forwardRef<SVGSVGElement, TablerTableAliasIconProps>(
	function TablerTableAliasIcon(props, ref) {
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
				<path d="M3 12v-7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-7" />
				<path d="M3 10h18" />
				<path d="M10 3v10" />
				<path d="M2 17a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTableAliasIcon.displayName = "TablerTableAliasIcon";
}
