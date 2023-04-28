import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandTumblrIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandTumblrIcon = React.forwardRef<SVGSVGElement, TablerBrandTumblrIconProps>(
	function TablerBrandTumblrIcon(props, ref) {
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
				<path d="M14 21h4v-4h-4v-6h4v-4h-4v-4h-4v1a3 3 0 0 1 -3 3h-1v4h4v6a4 4 0 0 0 4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandTumblrIcon.displayName = "TablerBrandTumblrIcon";
}
