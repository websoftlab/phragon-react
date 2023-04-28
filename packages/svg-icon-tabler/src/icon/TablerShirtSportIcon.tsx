import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShirtSportIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShirtSportIcon = React.forwardRef<SVGSVGElement, TablerShirtSportIconProps>(
	function TablerShirtSportIcon(props, ref) {
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
				<path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
				<path d="M10.5 11h2.5l-1.5 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShirtSportIcon.displayName = "TablerShirtSportIcon";
}
