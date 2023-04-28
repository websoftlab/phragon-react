import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPackageImportIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPackageImportIcon = React.forwardRef<SVGSVGElement, TablerPackageImportIconProps>(
	function TablerPackageImportIcon(props, ref) {
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
				<path d="M22 18h-7" />
				<path d="M18 15l-3 3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPackageImportIcon.displayName = "TablerPackageImportIcon";
}
