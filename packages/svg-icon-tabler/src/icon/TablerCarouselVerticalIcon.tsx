import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCarouselVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCarouselVerticalIcon = React.forwardRef<SVGSVGElement, TablerCarouselVerticalIconProps>(
	function TablerCarouselVerticalIcon(props, ref) {
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
				<path d="M19 8v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1z" />
				<path d="M7 22v-1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v1" />
				<path d="M17 2v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCarouselVerticalIcon.displayName = "TablerCarouselVerticalIcon";
}
