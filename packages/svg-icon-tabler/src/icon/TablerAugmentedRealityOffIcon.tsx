import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAugmentedRealityOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAugmentedRealityOffIcon = React.forwardRef<SVGSVGElement, TablerAugmentedRealityOffIconProps>(
	function TablerAugmentedRealityOffIcon(props, ref) {
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
				<path d="M4 8v-2c0 -.557 .228 -1.061 .595 -1.424" />
				<path d="M4 16v2a2 2 0 0 0 2 2h2" />
				<path d="M16 4h2a2 2 0 0 1 2 2v2" />
				<path d="M16 20h2c.558 0 1.062 -.228 1.425 -.596" />
				<path d="M12 12.5l.312 -.195m2.457 -1.536l1.231 -.769" />
				<path d="M9.225 9.235l-1.225 .765l4 2.5v4.5l3.076 -1.923m.924 -3.077v-2l-4 -2.5l-.302 .189" />
				<path d="M8 10v4.5l4 2.5" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAugmentedRealityOffIcon.displayName = "TablerAugmentedRealityOffIcon";
}
