import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDeviantartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDeviantartIcon = React.forwardRef<SVGSVGElement, TablerBrandDeviantartIconProps>(
	function TablerBrandDeviantartIcon(props, ref) {
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
				<path d="M18 3v4l-3.857 6h3.857v4h-6.429l-2.571 4h-3v-4l3.857 -6h-3.857v-4h6.429l2.571 -4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDeviantartIcon.displayName = "TablerBrandDeviantartIcon";
}
