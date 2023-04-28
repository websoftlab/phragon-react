import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageQuestionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageQuestionIcon = React.forwardRef<SVGSVGElement, TablerMessageQuestionIconProps>(
	function TablerMessageQuestionIcon(props, ref) {
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
				<path d="M8 9h8" />
				<path d="M8 13h6" />
				<path d="M14 18h-1l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
				<path d="M19 22v.01" />
				<path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageQuestionIcon.displayName = "TablerMessageQuestionIcon";
}
