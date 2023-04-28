import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandFramerMotionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandFramerMotionIcon = React.forwardRef<SVGSVGElement, TablerBrandFramerMotionIconProps>(
	function TablerBrandFramerMotionIcon(props, ref) {
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
				<path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
				<path d="M20 12l-8 8l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandFramerMotionIcon.displayName = "TablerBrandFramerMotionIcon";
}
