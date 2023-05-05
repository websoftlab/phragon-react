import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookmarkPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookmarkPlusIcon = React.forwardRef<SVGSVGElement, TablerBookmarkPlusIconProps>(
	function TablerBookmarkPlusIcon(props, ref) {
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
				<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
				<path d="M12 7 L12 13" />
				<path d="M15 10 L9 10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBookmarkPlusIcon.displayName = "TablerBookmarkPlusIcon";
}
