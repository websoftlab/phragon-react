import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSlideshowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSlideshowIcon = React.forwardRef<SVGSVGElement, TablerSlideshowIconProps>(
	function TablerSlideshowIcon(props, ref) {
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
				<path d="M15 6l.01 0" />
				<path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
				<path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" />
				<path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" />
				<path d="M8 21l.01 0" />
				<path d="M12 21l.01 0" />
				<path d="M16 21l.01 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSlideshowIcon.displayName = "TablerSlideshowIcon";
}
