import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTableImportIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTableImportIcon = React.forwardRef<SVGSVGElement, TablerTableImportIconProps>(
	function TablerTableImportIcon(props, ref) {
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
				<path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
				<path d="M3 10h18" />
				<path d="M10 3v18" />
				<path d="M19 22v-6" />
				<path d="M22 19l-3 -3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTableImportIcon.displayName = "TablerTableImportIcon";
}
