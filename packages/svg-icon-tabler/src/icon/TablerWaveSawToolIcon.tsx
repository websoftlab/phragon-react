import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWaveSawToolIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWaveSawToolIcon = React.forwardRef<SVGSVGElement, TablerWaveSawToolIconProps>(
	function TablerWaveSawToolIcon(props, ref) {
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
				<path d="M3 12h5l4 8v-16l4 8h5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWaveSawToolIcon.displayName = "TablerWaveSawToolIcon";
}
