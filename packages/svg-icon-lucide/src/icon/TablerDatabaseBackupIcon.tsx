import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDatabaseBackupIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDatabaseBackupIcon = React.forwardRef<SVGSVGElement, TablerDatabaseBackupIconProps>(
	function TablerDatabaseBackupIcon(props, ref) {
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
				<path d="M21 5 A9 3 0 0 1 12 8 A9 3 0 0 1 3 5 A9 3 0 0 1 21 5" />
				<path d="M3 12c0 1.18 2.03 2.2 5 2.7" />
				<path d="M21 5v4.5" />
				<path d="m12 16 1.27-1.35a4.75 4.75 0 1 1 .41 5.74" />
				<path d="M12 12v4h4" />
				<path d="M3 5v14c0 1.43 2.97 2.63 7 2.93" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDatabaseBackupIcon.displayName = "TablerDatabaseBackupIcon";
}
