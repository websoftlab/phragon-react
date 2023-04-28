import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAppgalleryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAppgalleryIcon = React.forwardRef<SVGSVGElement, TablerBrandAppgalleryIconProps>(
	function TablerBrandAppgalleryIcon(props, ref) {
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
				<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
				<path d="M9 8a3 3 0 0 0 6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandAppgalleryIcon.displayName = "TablerBrandAppgalleryIcon";
}
