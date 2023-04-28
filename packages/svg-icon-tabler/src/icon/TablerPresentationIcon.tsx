import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPresentationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPresentationIcon = React.forwardRef<SVGSVGElement, TablerPresentationIconProps>(
	function TablerPresentationIcon(props, ref) {
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
				<path d="M3 4l18 0" />
				<path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
				<path d="M12 16l0 4" />
				<path d="M9 20l6 0" />
				<path d="M8 12l3 -3l2 2l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPresentationIcon.displayName = "TablerPresentationIcon";
}
