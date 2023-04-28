import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZoomQuestionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZoomQuestionIcon = React.forwardRef<SVGSVGElement, TablerZoomQuestionIconProps>(
	function TablerZoomQuestionIcon(props, ref) {
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
				<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M21 21l-6 -6" />
				<path d="M10 13l0 .01" />
				<path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZoomQuestionIcon.displayName = "TablerZoomQuestionIcon";
}
