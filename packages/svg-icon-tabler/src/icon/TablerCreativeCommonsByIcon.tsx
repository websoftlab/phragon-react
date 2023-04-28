import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCreativeCommonsByIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCreativeCommonsByIcon = React.forwardRef<SVGSVGElement, TablerCreativeCommonsByIconProps>(
	function TablerCreativeCommonsByIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M12 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M9 13v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-.5l-.5 4h-2l-.5 -4h-.5a1 1 0 0 1 -1 -1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCreativeCommonsByIcon.displayName = "TablerCreativeCommonsByIcon";
}
