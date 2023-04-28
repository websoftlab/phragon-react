import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGoogleDriveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGoogleDriveIcon = React.forwardRef<SVGSVGElement, TablerBrandGoogleDriveIconProps>(
	function TablerBrandGoogleDriveIcon(props, ref) {
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
				<path d="M12 10l-6 10l-3 -5l6 -10z" />
				<path d="M9 15h12l-3 5h-12" />
				<path d="M15 15l-6 -10h6l6 10z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGoogleDriveIcon.displayName = "TablerBrandGoogleDriveIcon";
}
