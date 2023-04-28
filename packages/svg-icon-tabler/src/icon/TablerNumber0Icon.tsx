import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumber0IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumber0Icon = React.forwardRef<SVGSVGElement, TablerNumber0IconProps>(function TablerNumber0Icon(
	props,
	ref
) {
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
			<path d="M16 16v-8" />
			<path d="M12 20a4 4 0 0 0 4 -4v-8a4 4 0 1 0 -8 0v8a4 4 0 0 0 4 4z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumber0Icon.displayName = "TablerNumber0Icon";
}
