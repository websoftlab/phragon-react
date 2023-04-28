import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTableShortcutIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTableShortcutIcon = React.forwardRef<SVGSVGElement, TablerTableShortcutIconProps>(
	function TablerTableShortcutIcon(props, ref) {
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
				<path d="M3 13v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8" />
				<path d="M3 10h18" />
				<path d="M10 3v11" />
				<path d="M2 22l5 -5" />
				<path d="M7 21.5v-4.5h-4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTableShortcutIcon.displayName = "TablerTableShortcutIcon";
}
