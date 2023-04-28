import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNoCreativeCommonsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNoCreativeCommonsIcon = React.forwardRef<SVGSVGElement, TablerNoCreativeCommonsIconProps>(
	function TablerNoCreativeCommonsIcon(props, ref) {
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
				<path d="M10.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116" />
				<path d="M16.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116" />
				<path d="M6 6l1.5 1.5" />
				<path d="M16.5 16.5l1.5 1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNoCreativeCommonsIcon.displayName = "TablerNoCreativeCommonsIcon";
}
