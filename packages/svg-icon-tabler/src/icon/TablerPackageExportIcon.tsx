import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPackageExportIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPackageExportIcon = React.forwardRef<SVGSVGElement, TablerPackageExportIconProps>(
	function TablerPackageExportIcon(props, ref) {
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
				<path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
				<path d="M12 12l8 -4.5" />
				<path d="M12 12v9" />
				<path d="M12 12l-8 -4.5" />
				<path d="M15 18h7" />
				<path d="M19 15l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPackageExportIcon.displayName = "TablerPackageExportIcon";
}
