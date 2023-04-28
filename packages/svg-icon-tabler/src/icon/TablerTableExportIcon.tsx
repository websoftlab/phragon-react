import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTableExportIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTableExportIcon = React.forwardRef<SVGSVGElement, TablerTableExportIconProps>(
	function TablerTableExportIcon(props, ref) {
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
				<path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
				<path d="M3 10h18" />
				<path d="M10 3v18" />
				<path d="M16 19h6" />
				<path d="M19 16l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTableExportIcon.displayName = "TablerTableExportIcon";
}
