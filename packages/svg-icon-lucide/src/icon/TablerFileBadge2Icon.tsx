import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileBadge2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileBadge2Icon = React.forwardRef<SVGSVGElement, TablerFileBadge2IconProps>(
	function TablerFileBadge2Icon(props, ref) {
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
				<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
				<path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
				<path d="m14 12.5 1 5.5-3-1-3 1 1-5.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileBadge2Icon.displayName = "TablerFileBadge2Icon";
}
