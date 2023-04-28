import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookmarkQuestionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookmarkQuestionIcon = React.forwardRef<SVGSVGElement, TablerBookmarkQuestionIconProps>(
	function TablerBookmarkQuestionIcon(props, ref) {
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
				<path d="M15.006 18.804l-3.006 -1.804l-5 3v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5.5" />
				<path d="M19 22v.01" />
				<path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBookmarkQuestionIcon.displayName = "TablerBookmarkQuestionIcon";
}
